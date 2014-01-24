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
  validates :title, :body, :presence => true
end

class MyApp < Sinatra::Base

  configure do
    # Logging
    enable :logging
    file = File.new("#{settings.root}/log/#{settings.environment}.log", 'a+')
    file.sync = true
    use Rack::CommonLogger, file
  end

  helpers do

    def post_link(post, title)
      "<a href='/posts/#{ post.id }'>#{ title }</a>"
    end

  end

 get '/' do
    @posts = Post.all
    haml :index
 end


  get '/posts/:id' do
    @post = Post.find(params[:id])
    haml :show
  end

  post '/posts' do
    @post = Post.create(params[:post])
    if @post.save
      redirect to('/'), 303
    else
      @posts = Post.order('created_at DESC')
      haml :index
    end
  end


  delete '/posts/:id' do

  end

  put '/posts/:id' do

  end

end

