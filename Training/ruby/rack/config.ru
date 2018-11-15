require_relative 'rackapp'
require 'logger'

@app = RackApp.new

use Rack::Reloader, 10

logger = Logger.new('log/app.log')
use Rack::CommonLogger, logger


run @app