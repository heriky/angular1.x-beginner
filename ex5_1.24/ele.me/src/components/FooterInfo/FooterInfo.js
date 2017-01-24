import weixinqc from './assets/images/wexinqc.png';
import copyright from './assets/images/copyright.png';

class FooterInfo{
	constructor(){}
	$onInit(){}
}

export default {
	controller: FooterInfo,
	bindings: {},
	template: `
	<footer class="footer">
		<div class="container">
			<div class="footer-link">
				<div class="footer-link-item">
					<h3>用户帮助</h3>
					<a href="">客服中心</a>
					<a href="">客服中心</a>
					<a href="">客服中心</a>
				</div>
				<div class="footer-link-item">
					<h3>用户帮助</h3>
					<a href="">客服中心</a>
					<a href="">客服中心</a>
					<a href="">客服中心</a>
				</div>
				<div class="footer-link-item">
					<h3>用户帮助</h3>
					<a href="">客服中心</a>
					<a href="">客服中心</a>
					<a href="">客服中心</a>
				</div>
				<div class="footer-link-item">
					<p class="tel">24小时客服热线 : 10105757</p>
					<p class="feddback">意见反馈 : feedback@ele.me</p>
					<span class="follow">关注我们:</span>
					<div class="weixin">
						<div class="dropbox">
							<img src="${weixinqc}" alt="" class="weixinqc">
							<p>微信号:elemeorder</p>
							<p>饿了么网上订餐</p>
						</div>
					</div>
					<div class="weibo">&nbsp;</div>
				</div>
				<div class="footer-link-item">
					<a href="#" class="footer-qrcode"><img src="${weixinqc}" alt=""></a><h3>下载手机版</h3><p>扫一扫,手机订餐方便</p>
				</div>
			</div>
			<div class="footer-info">
				<p class="owner">所有方：上海拉扎斯信息科技有限公司</p>
				<p class="copyright">增值电信业务许可证 : 沪B2-20150033 | 沪ICP备 09007032 | 上海工商行政管理 Copyright ©2008-2016 ele.me, All Rights Reserved.</p>
				<img class="copyright-img" src="${copyright}" alt="">
			</div>
		</div>
	</footer>
	`
}