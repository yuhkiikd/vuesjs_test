var vm = new Vue({
  el: '#app',
  data: {
    name: 'A山B郎',
    cource: 'Webエンジニアコース',
    acceptancePeriod: '2019年01月期',
    defaultLastId: 3,
    students: [
      { id: 1, name: '野呂浩良', cource: '機械学習コース', acceptancePeriod: '2019年01月期' },
      { id: 2, name: '富永修司', cource: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' },
      { id: 3, name: '斉藤一起', cource: 'Webエンジニアコース', acceptancePeriod: '2017年11月期' }
    ]
  },
  methods: {
    addStudent: function () {
      id = this.students.length + 1
      this.students.push({ id: id, name: this.name, cource: this.cource, acceptancePeriod: this.acceptancePeriod });
      this.name = '';
      this.cource = '';
      this.acceptancePeriod = '';
    }
  }
})