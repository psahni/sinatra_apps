require 'sinatra'
require 'sinatra/base'
require 'haml'
require 'erb'
require './config'

configure do
  set :views, File.join(File.dirname(__FILE__), 'views')
end


class MyApp < Sinatra::Base

 get '/' do
    haml :index
 end

end

