class PlacesController < ApplicationController
  def london
    @title = "London"  
    @pic = Places.find(1)
  end

  def paris
    @title = "Paris"
    @pic = Places.find(3)
  end
  
  def swiss
    @title = "Swiss"
    @pic = Places.find(5)
  end
  
  def seoul
    @title = "Seoul"
    @pic = Places.find(7)
  end
  
  def us
    @title = "U.S.A"
    @pic = Places.find(9)
  end
  
  def hk
    @title = "Hong Kong"
    @pic = Places.find(11)
  end

  def jam
    @title = "Jamaica"
    @pic = Places.find(13)
  end

  def new
    @title = "new"
    @pic1 = Places.find(1)
    @pic2 = Places.find(2)
    @pic3 = Places.find(3)
    @pic4 = Places.find(4)
    @pic5 = Places.find(5)
    @pic6 = Places.find(6)
    @pic7 = Places.find(7)
    @pic8 = Places.find(8)
    @pic9 = Places.find(9)
    @pic10 = Places.find(10)
    @pic11 = Places.find(11)
    @pic12 = Places.find(12)
    @pic13 = Places.find(13)
    @pic14 = Places.find(14)
    @pic15 = Places.find(15)
    @pic16 = Places.find(16)
    render :layout => false
  end
end
