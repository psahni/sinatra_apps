## Reload sinatra automatically

* Use  shotgun gem

* Make a config.ru file [Rack]

* Write the following code


require 'rubygems'
require 'bundler/setup'
require "#{File.dirname(__FILE__)}/app"
run Sinatra::Application