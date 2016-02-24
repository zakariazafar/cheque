source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.4'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'

# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# HOME: https://github.com/rharriso/bower-rails
# Bower support for Rails projects. 
gem 'bower-rails'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# HOME: https://github.com/ddollar/foreman
# Manage Procfile-based applications
gem "foreman"

group :production, :staging do
  # HOME: https://github.com/heroku/rails_12factor
  # Makes running your Rails app easier. Based on the ideas behind 12factor.net
  gem "rails_12factor"

  # HOME: https://github.com/heroku/rails_stdout_logging
  # Rails gem to configure your app to log to standard out.
  gem "rails_stdout_logging"

  # HOME: https://github.com/heroku/rails_serve_static_assets
  # Rails gem to enable serving of static assets
  gem "rails_serve_static_assets"
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'

  # HOME: https://github.com/rspec/rspec-rails
  # rspec-rails is a testing framework for Rails 3.x and 4.x.
  gem 'rspec-rails', '~> 2.0'

  # HOME: https://github.com/thoughtbot/factory_girl_rails
  # factory_girl is a fixtures replacement 
  gem 'factory_girl_rails', '~> 4.0'

  # HOME: https://github.com/jnicklas/capybara
  # Acceptance test framework for web applications 
  gem 'capybara'

  # HOME: https://github.com/DatabaseCleaner/database_cleaner
  # Strategies for cleaning databases in Ruby. 
  # Can be used to ensure a clean state for testing.
  gem 'database_cleaner'

  # HOME: https://github.com/SeleniumHQ/selenium
  # A browser automation framework and ecosystem.
  gem 'selenium-webdriver'

end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

