import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
          id: 1,
          title: 'Tallinna Ülikool',
          city: 'Tallinn',
          students: 7130,
          image: 'https://ectallinn2018.ee/wp-content/uploads/2018/06/tallinna-%C3%BClikool.jpg',
        }, {
          id: 2,
          title: 'TalTech',
          city: 'Tallinn',
          students: 10852 ,
          image: 'http://www.ecb.ee/wp-content/uploads/2019/04/TalTech-sisehoov.jpg',          
        },
        {
          id: 3,
          title: 'Tartu Ülikool',
          city: 'Tartu',
          students: 14044,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tartu_%C3%9Clikooli_peahoone_2014-12.JPG/220px-Tartu_%C3%9Clikooli_peahoone_2014-12.JPG',          
        }];
      }
});
