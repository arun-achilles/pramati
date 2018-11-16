# Install Python
```
sudo add-apt-repository ppa:jonathonf/python-3.6
sudo apt-get update
sudo apt-get install python3.6
```

# Install pip and virtualenv
```
sudo apt-get install python-pip python-dev build-essential 
sudo pip install --upgrade pip 
sudo pip install --upgrade virtualenv 
```
# install spaCy
```
pip install -U spacy
||
pip install -U spacy --user
```
# download English(en) model
```
python -m spacy download en 
||
python -m spacy download en --user
```
