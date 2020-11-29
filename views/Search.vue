<template>
    <div>
        <b-row class="mt-5">
            <b-col
                md="8"
                offset-md="2"
                lg="6"
                offset-lg="3"
            >
                <b-card title="搜索" v-if="!telephone">
                    <b-form>
                        <b-form-group label="QQ">
                            <b-form-input
                                v-model="qq"
                                type="text"
                                placeholder="输入您要搜索的QQ"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group>
                            <b-button
                                @click="searchqq"
                                variant="outline-primary"
                                block
                            >搜索</b-button>
                        </b-form-group>
                    </b-form>
                </b-card>
                <b-card v-else border-variant="success" header="Search done" align="center">
                    <b-card-text>
                        qq: {{qq}}
                        telephone: {{telephone}}</b-card-text>
                    <b-button
                        @click="back"
                        variant="outline-primary"
                        block
                    >返回</b-button>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
        qq: '',
        telephone: '',
        };
    },
    methods:{
        ...mapActions('swdModule',{ query : 'query'}),
        searchqq() {
            this.query(this.qq).then((res) => {
                this.telephone = res.data.swds.telephone
                if (this.telephone == "") {
                    this.telephone = "数据库中未找到"
                }
                console.log(this.telephone)
            }).catch((err) => {
                this.$bvToast.toast(err.response.data.msg,{
                    title: '数据验证错误',
                    variant: 'danger',
                    solid: true,
                })
            })
        },
        back(){
            this.telephone = ""
        }
    }
}
</script>
<style lang="scss" scoped>
</style>