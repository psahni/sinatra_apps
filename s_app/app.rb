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


class Post < ActiveRecord::Base

end

class MyApp < Sinatra::Base

 get '/' do
    haml :index
 end

end

