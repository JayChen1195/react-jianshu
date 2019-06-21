import { fromJS } from "immutable";

const defaultState = fromJS({
  title: "过年后，我的公司只剩我一人了",
  content: '<img className="detail-pic" src="http//upload-images.jianshu.io/upload_images/2100084-5ebde62c62cce724?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp" alt="" /><p className="detail-mian">年后公司初八正常营业，我一人打开公司门，象征性地打扫了一下卫生，周围很安静，让我有点不适应，但心情是前所未有的轻松。</p><p className="detail-mian">以后自己既是老板，也是员工了。自己赚钱自己花，再也不用想着养活员工了。</p><p className="detail-mian">小设计公司成立之初，我招聘了4名新员工，自己培养自己带，还把他们逐个送去专门培训，学习我自己不精通的设计领域，为着以后能拓宽公司业务。经过一二年实战锻炼，4人专业能力上升挺快，在此期间，基本靠我自己接单赚钱养活公司。</p><p className="detail-mian">员工都能独挡一面后，我接到单子，就分配擅长该领域业务的员工，自己一路培养过来的，员工算是蛮得力，案子进度、效果基本不用我操心。员工开始创造效益，我也能安心做好自己一块业务，两方面盈利都还可以，这段时间日子还是挺好过的。</p>'
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

