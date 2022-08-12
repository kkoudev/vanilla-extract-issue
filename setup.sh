#!/bin/bash

#==============================================
# Entry point of this script
#==============================================

if [[ $(uname -s) != 'Darwin' ]]; then

  echo 'This script support macOS only.'
  exit 1

fi

which brew > /dev/null 2>&1
if [[ $? -ne 0 ]]; then

  echo "Installing Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  echo "Complete installing Homebrew."

fi

# Install ndw
bash <(curl -s https://raw.githubusercontent.com/kkoudev/ndw/master/install.sh)

ndw install -s
ndw install-yarn
yarn

echo '======================================================================='
echo 'Complete setup.'
echo '======================================================================='

