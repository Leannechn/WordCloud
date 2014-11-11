require.config({
	baseUrl:"js/wordcloud",
    paths: {
    	jquery:'../jquery-1.11.1.min',
    	wCloud:"wordcloud"
    }
});

require(["jquery","wCloud"], function($,w) {
	//ource-out
    var wcld = w;
    var option = {
    	styleType:"tilt",//normal ；vertical tilt（45°）
    	data:[
			{"word":"这里","frq":22,"otherMsg":"tip Messege"},
			{"word":"没有","frq":23,"otherMsg":"tip Messege"},
			{"word":"旅行社","frq":14,"otherMsg":"tip Messege"},
			{"word":"厦门","frq":43,"otherMsg":"tip Messege"},
			{"word":"会展中心","frq":25,"otherMsg":"tip Messege"},
			{"word":"鼓浪屿","frq":14,"otherMsg":"tip Messege"},
			{"word":"旅行社","frq":14,"otherMsg":"tip Messege"},
			{"word":"这里","frq":12,"otherMsg":"tip Messege"},
			{"word":"没有","frq":13,"otherMsg":"tip Messege"},
			{"word":"这里","frq":12,"otherMsg":"tip Messege"},
			{"word":"没有","frq":13,"otherMsg":"tip Messege"},
			{"word":"这里","frq":12,"otherMsg":"tip Messege"},
			{"word":"没有","frq":13,"otherMsg":"tip Messege"},
			{"word":"这里","frq":22,"otherMsg":"tip Messege"},
			{"word":"没有","frq":13,"otherMsg":"tip Messege"},
			{"word":"这里","frq":12,"otherMsg":"tip Messege"},
			{"word":"没有","frq":13,"otherMsg":"tip Messege"},
			{"word":"公交车","frq":17,"otherMsg":"tip Messege"},
			{"word":"喜欢","frq":24,"otherMsg":"tip Messege"},
			{"word":"大海","frq":18,"otherMsg":"tip Messege"},
			{"word":"大海","frq":28,"otherMsg":"tip Messege"}
			]
    }
    var wd = wcld.init($("#wordcloud")[0]);
    console.log(wd);
    wd = wd.setOption(option);

});
