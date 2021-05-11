require 'html-proofer'

task :test do
  sh "bundle exec jekyll build"
  options = { :assume_extension => true, :disable_external => true }
  HTMLProofer.check_directory("./_site", options).run
end

task :build do
  sh "cd assets; gulp"
  sh "bundle exec jekyll build"
end
