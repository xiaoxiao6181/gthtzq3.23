
$.ajax({
	url:"./footer.html",
	async:false,
	success:function(res){
		document.getElementById("footer").innerHTML = res;
		console.log('footer')
		if(localStorage.getItem('config')){
			$(".t_span.four").attr('href',JSON.parse(localStorage.getItem('config')).service)
			
		}else{
			AjaxUtil.get('/index/index/getConfigInfo').then(res => {
			    localStorage.setItem('config', JSON.stringify(res.data));
			    $(".t_span.four").attr('href',res.data.service)
			});
		}
	}
})