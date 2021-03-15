class V1::ThingsController <ApplicationController
 def index
    render json: { :things => [
      {
	    :name => 'some-thing',
		:guid => 'asl;kdjf-asldkjf'
	  }
	] }.to_json
  end
end
