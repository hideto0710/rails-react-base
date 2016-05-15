rails-react
===

## Setup
### Install rbenv
```
$ brew install rbenv
$ echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
$ source ~/.bash_profile
$ rbenv install 2.3.1
$ rbenv global 2.3.1
$ gem install bundler
```

### Install nodebrew
```
$ curl -L git.io/nodebrew | perl - setup
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
$ source ~/.bash_profile
$ nodebrew install-binary stable
$ nodebrew use stable
```

### project
```
$ bundle install --path vendor/bundler
$ npm install
```

## Run
```
$ bundle exec rails server
```

## Lint
```
$ npm run lint
```

## Test
```
$ npm test
```