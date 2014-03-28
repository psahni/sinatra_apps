require 'sinatra'
require 'sinatra/base'
require './greeting'
require 'json'


get '/' do
  greeting = Greeting.new('prashant')
  greeting.greeting('World!')
end


 get '/greeting.?:format?' do
   content_type params[:format].to_sym   if params[:format]
   greeting = Greeting.new(params[:name])
   content = greeting.greeting('World!')
   if params[:format] && params[:format] == 'json'
    {:content =>  content[:content], :links => [:rel => 'self', :href => request.url]}.to_json
   else
     content[:content]
   end
 end
