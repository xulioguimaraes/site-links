#mac
NVM_PATH := ~/.nvm/nvm.sh

up:
	. $(NVM_PATH) && nvm use 18 && yarn run dev

install: 
	. $(NVM_PATH) && nvm use 18 && yarn