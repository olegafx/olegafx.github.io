Install Docker on OSX using Homebrew
====================================

Install Homebrew
----------------

```bash
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

Install Virtualbox
------------------

```bash
brew update
brew tap phinze/homebrew-cask
brew install brew-cask
brew cask install virtualbox
```

Install boot2docker
-------------------

```bash
brew install boot2docker
```

If you want to load boo2docker automatically:

```bash
ln -sfv /usr/local/opt/boot2docker/*.plist ~/Library/LaunchAgents
launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.boot2docker.plist
```

Tell boot2docker to download iso file, create ssh key and start:

```
boot2docker init
boot2docker up
```

You will see a message. Something like:

```bash
To connect the Docker client to the Docker daemon, please set:
    export DOCKER_HOST=tcp://192.168.59.103:2376
    export DOCKER_CERT_PATH=/Users/[username]/.boot2docker/certs/boot2docker-vm
    export DOCKER_TLS_VERIFY=1
```

Make that 3 exports and you’re good to go!

```bash
docker run hello-world
```

That’s all. Have a nice day of [learning Docker](https://docs.docker.com/userguide/) :smile:
