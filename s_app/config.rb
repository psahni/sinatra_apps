class DatabaseTasks

  def initialize(config)
    @configuration =  config
  end

  def create_database
    begin
      ActiveRecord::Base.establish_connection(configuration_without_database)
      ActiveRecord::Base.connection.create_database(@configuration['database'] )
    rescue => e
      STDOUT.puts "Error: #{ e.message }"
    end
  end

  def configuration
   @configuration
  end

  def configuration_without_database
    configuration.merge('database' => nil )
  end


  def creation_options
    Hash.new.tap do |options|
      options[:charset]     = configuration['encoding']   if configuration.include? 'encoding'
      options[:collation]   = configuration['collation']  if configuration.include? 'collation'
      # Set default charset only when collation isn't set.
      options[:charset]   ||= configuration['charset']
      # Set default collation only when charset is also default.
      options[:collation] ||= configuration['collation']
    end
  end

  def migrate
    ActiveRecord::Migrator.migrate(
        'db/migrate',
        ENV["VERSION"] ? ENV["VERSION"].to_i : nil
    )
  end

  def drop_database
    ActiveRecord::Base.establish_connection(@configuration)
    ActiveRecord::Base.connection.drop_database(@configuration['database'])
  end

  def self.settings
    config = YAML::load( File.open('database.yml') )['development']
  end

  def self.establish_connection
    ActiveRecord::Base.establish_connection(settings)
  end


end
