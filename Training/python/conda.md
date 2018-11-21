# Install Anaconda
- download the latest Anaconda installer bash script, verify it, and then run it.
- change to the /tmp directory on your server (As we dont need the bash script after running it.)
```
cd /tmp
```
- Download the link that you copied from the Anaconda website
```
curl -O https://repo.continuum.io/archive/Anaconda3-5.0.1-Linux-x86_64.sh
```
-  verify the data integrity of the installer with cryptographic hash
```
sha256sum Anaconda3-5.0.1-Linux-x86_64.sh
```
- Output hash recieved should match with the hashes available at 'Anaconda with Python 3 on 64-bit Linux page' for your appropriate Anaconda version

- Run the bash script
```
bash Anaconda3-5.0.1-Linux-x86_64.sh
```
- Press 'enter' to Continue Installation

- Type 'yes' for agreeing to the licence terms.

- Confirm the installation location.

- To activate the installation 
```
source ~/.bashrc
```

- Verify Conda Installation
```
conda list
```
