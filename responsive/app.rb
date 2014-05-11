require 'sinatra'
require 'sinatra/base'
require 'erb'


configure do
  set :views, File.join(File.dirname(__FILE__), 'views')
end



get '/navigation' do
  send_file 'views/navigation_example.html'
end

get '/mynav' do
  send_file 'views/mynav.html'
end

get '/css3_progress' do
  send_file 'views/css3_progress.html'
end