
<template>
  <div class="home">
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="http://sites.sylu.edu.cn/yanjiusheng/upload/image/001(2).jpg"
      ></b-carousel-slide>

      <b-carousel-slide img-src="http://sites.sylu.edu.cn/yanjiusheng/upload/image/001(2).jpg">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="http://sites.sylu.edu.cn/yanjiusheng/upload/image/001(2).jpg"></b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="http://sites.sylu.edu.cn/yanjiusheng/upload/image/001(2).jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
  <div>
  <b-jumbotron header="智禾" lead="沈阳理工大学">
    <p>学生开发团队</p>
    <div>
    <b-button v-b-toggle.sidebar-right variant="info">关于我们</b-button>
    <b-sidebar id="sidebar-right" title="智禾农业" right shadow>
      <div class="px-3 py-2">
        <p>
          智禾农业APP是一款以‘助农’为主题，适用于农业大棚、畜牧等方向的应用软件。
          智禾农业能确保用户不受时间和空间的影响，实时进行数据查看、对设备的远程控制，为用户提供最新的新闻资讯及市场动态。
        </p>
        <b-img src="http://sites.sylu.edu.cn/yanjiusheng/upload/image/001(2).jpg" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
  </b-jumbotron>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: { },
  data() {
    return {
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<!--
<template>
    <div>
        <b-row class="mt-5">
            <b-col
                md="8"
                offset-md="2"
                lg="6"
                offset-lg="3"
            >
                <b-card title="搜索">
                    <b-form>
                        <b-form-group label="QQ">
                            <b-form-input
                                v-model="$v.qq.$model"
                                type="text"
                                placeholder="输入您要搜索的QQ"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-button
                                @click="search"
                                variant="outline-primary"
                                block
                            >搜索</b-button>
                        </b-form-group>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
        qq: '',
        telephone: '',
        };
    },
    validations: {
        qq:{
            required,
            minLength:minLength(5),
        }
    },
    menthods:{
        ...mapActions('swdModule',{qqsearch: 'search'}),
        validateState(name) {
        // 这里是es6 解构赋值
          const { $dirty, $error } = this.$v.name;
          return $dirty ? !$error : null;
        },
        search() {
            this.$v.qq.$touch();
            if (this.$v.qq.$anyError) {
                return;
            }
            this.qqsearch(this.qq).then((res) => {
                this.telephone = res.data.telephone
            }).catch((err) => {
                this.$bvToast.toast(err.response.data.msg,{
                    title: '数据验证错误',
                    variant: 'danger',
                    solid: true,
                })
            })
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
-->