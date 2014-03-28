class Greeting

  def initialize(name)
     @name = name
  end
 
  def greeting(message)
    content = "Hello #{ @name }, #{ message }"
    {:content => content}
  end
  
end
