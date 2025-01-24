# Test for PetStore client

## How to run the test

First, run the following command to start the server:
```
dotnet run --project <RepoRoot>/petstore/servers/aspnet/petstore.csproj
```

Create and activate your own Python virtual environment ([reference](https://docs.python.org/3/library/venv.html)), and install the library with:
```
cd <RepoRoot>/petstore/clients/python
python setup.py install
```
Then, run the following command to install necessary dependencies for test:

```
cd <RepoRoot>/petstore/clients/python
pip install -r dev_requirements.txt
```

Then, run test:
```
cd <RepoRoot>/petstore/clients/python/test
pytest test
```