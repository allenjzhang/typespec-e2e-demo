# Test for TodoApp client

## How to run the test

1. Run the following command to start the server:
```
dotnet run --project <RepoRoot>/todoApp/servers/aspnet/Todo.csproj
```
2. Create and activate your own Python virtual environment ([reference](https://docs.python.org/3/library/venv.html))
3. Run `pip install setuptools`
4. Install the library with:
```
cd <RepoRoot>/todoApp/clients/python
python setup.py install
```
5. Run the following command to install necessary dependencies for test:
```
cd <RepoRoot>/todoApp/clients/python
pip install -r dev_requirements.txt
```
6. Run test:
```
cd <RepoRoot>/todoApp/clients/python
pytest test
```