require 'sinatra'
require 'sinatra/base'

require 'sinatra/activerecord/rake'
require 'active_record'

require 'haml'
require 'erb'

require './config'

set :database, 'sinatra_app_dev'

configure do
  set :views, File.join(File.dirname(__FILE__), 'views')
  DatabaseTasks.establish_connection()
end


# After creating the database and defining the migrations

class Post < ActiveRecord::Base
end

class MyApp < Sinatra::Base

 get '/' do
    @posts = Post.order('created_at DESC')
    haml :index
 end

end

