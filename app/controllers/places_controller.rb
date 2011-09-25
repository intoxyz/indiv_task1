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
    @pic = Places.find(12)
  end
end
