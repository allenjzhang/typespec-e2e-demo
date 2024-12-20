import json
from typing import Any, Dict, IO, List, Mapping, Optional, Tuple, Union

from ._model_base import Model, SdkJSONEncoder


# file-like tuple could be `(filename, IO (or bytes))` or `(filename, IO (or bytes), content_type)`
FileContent = Union[str, bytes, IO[str], IO[bytes]]

FileType = Union[
    # file (or bytes)
    FileContent,
    # (filename, file (or bytes))
    Tuple[Optional[str], FileContent],
    # (filename, file (or bytes), content_type)
    Tuple[Optional[str], FileContent, Optional[str]],
]


def serialize_multipart_data_entry(data_entry: Any) -> Any:
    if isinstance(data_entry, (list, tuple, dict, Model)):
        return json.dumps(data_entry, cls=SdkJSONEncoder, exclude_readonly=True)
    return data_entry


def prepare_multipart_form_data(
    body: Mapping[str, Any], multipart_fields: List[str], data_fields: List[str]
) -> Tuple[List[FileType], Dict[str, Any]]:
    files: List[FileType] = []
    data: Dict[str, Any] = {}
    for multipart_field in multipart_fields:
        multipart_entry = body.get(multipart_field)
        if isinstance(multipart_entry, list):
            files.extend([(multipart_field, e) for e in multipart_entry])
        elif multipart_entry:
            files.append((multipart_field, multipart_entry))

    for data_field in data_fields:
        data_entry = body.get(data_field)
        if data_entry:
            data[data_field] = serialize_multipart_data_entry(data_entry)

    return files, data
