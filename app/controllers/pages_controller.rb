class PagesController < ApplicationController
  def home
  	@title = "Home"
  end

  def contact
  	@title = "Who am I"
  end

#  def about
#  	@title = "About"
#  end
  
  def help
  	@title = "Help"
  end

  def comment
  	@title = "Comments"
    @micropost = Micropost.new if signed_in?
  end

  def place
    @title = "Places"
  	@pic = Places.find(2)
  end


end
