import { Service } from 'egg'

class ApiService extends Service {

  // 创建接口
  public async create(params) {
    const { ctx } = this;
    try {
      const results = await ctx.model.Api.create(Object.assign({}, params));
      return results;
    } catch (err) {
      console.log('err:',err)
      return {
        code: 500,
        msg: JSON.stringify(err),
      };
    }
  }

  // 获取接口列表
  public async getList(params) {
    const { ctx } = this;
    try {
      const results = await ctx.model.Api.find(params);
      return results;
    } catch (err) {
      return {
        code: 500,
        msg: JSON.stringify(err),
      };
    }
  }

  // 删除api
  public async delete(params) {
    const { ctx } = this;
    try {
      // console.log('apiparams24:',params)
      // const results = await ctx.model.Api.deleteOne({ _id: params._id });
      const results = await ctx.model.Api.deleteMany(params);
      // console.log('rapiesults24:',results)
      return results;
    } catch (err) {
      return {
        code: 500,
        msg: JSON.stringify(err),
      };
    }
  }

  // 获取api详情
  public async getDetail(params) {
    // console.log('53:',params)
    const { ctx } = this;
    try {
      const results = await ctx.model.Api.findOne(params);
      // console.log('57:',results)
      return results;
    } catch (err) {
      return {
        code: 500,
        msg: JSON.stringify(err),
      };
    }
  }

}
export default ApiService;