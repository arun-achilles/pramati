#require 'rack'
class RackApp

  def call(env)
    start = Time.now

    req = Rack::Request.new(env)
    if req.path_info =~ /morning/
      body = "<h1>hello all!! Good morning  !!!<h1>"
    else
      body = "<h1>Hello all!! </h1>"
    end
    elapsed = (Time.now - start)

    # log env, elapsed, status, header

    [200, {'content-type' => 'text/html'}, [body]]


  end

  # private 

  # def log (env, elapsed_time, status, header)
  #   length = extract_content_length(header)
  #   logger = @logger || env['rack.errors']
  #   logger.write FORMAT % [
  #   env['HTTP_X_FORWARDED_FOR'] || env["REMOTE_ADDR"] || "-",
  #   env["REMOTE_USER"] || "-",
  #   now.strftime("%d/%b/%Y %H:%M:%S"),
  #   env["REQUEST_METHOD"],
  #   env["PATH_INFO"],
  #   env["QUERY_STRING"].empty? ? "" : "?"+env["QUERY_STRING"],
  #   env["HTTP_VERSION"],
  #   status.to_s[0..3],
  #   elapsed_time ]

  # end
end

