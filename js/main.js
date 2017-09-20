
        /*翻面控制*/
        function turn(elem) {
                var n=elem.id.split('_')[1];
                if(!elem.classList.contains("photo_center"))
                {
                    return rsort(n);
                }
            if (elem && elem.classList && elem.classList.contains("photo_front")) {
                elem.classList.remove("photo_front");
                elem.classList.add("photo_back");
                g('#nav_'+n).classList.add('i_back');

            }
            else {
                elem.classList.remove("photo_back");
                elem.classList.add("photo_front");
                g('#nav_'+n).classList.remove('i_back');
            }
            return  elem.className;
        }
                /*随机生成一个值，支持取值范围 range为数组 [min,max]*/
      function random(range) {
          var max=Math.max(range[0],range[1]);
          var min=Math.min(range[0],range[1]);
          var diff=max-min;
          var number=Math.ceil(Math.random()*diff+min);
          return number;

      }
    /*输出所有的海报*/
    var  data=data;
      function addPhotos() {
          var template = g('#wrap').innerHTML;
          var html = [];
          var nav=[];
          for (s in data) {
              console.log(data[s].img)
              var _html = template.replace('{{index}}', s)
                  .replace('{{img}}', data[s].img)
                  .replace('{{caption}}', data[s].caption)
                  .replace('{{desc}}', data[s].desc);
               html.push(_html);
              var _nav='<span id="nav_'+s+'" class="i" onclick="turn(g(\'#photo_'+s+'\'))"></span>';
              nav.push(_nav);
          }
          html.push('<nav id="nav" class="nav">'+nav.join('')+'</nav>');

          g('#wrap').innerHTML=html.join('');
          rsort(random([0,data.length-1]));

      }

      addPhotos();
        /*6 计算左右分区的范围*/
        function range() {
            var range={left:{x:[],y:[]},right:{x:[],y:[]}};
            var wrap={
                w:g('#wrap').clientWidth,
                h:g('#wrap').clientHeight
            };
            var photo={
                w:g('.photo')[0].clientWidth,
                h:g('.photo')[0].clientHeight
            };
            range.wrap=wrap;
            range.photo=photo;
            //左右照片的范围

            //大范围
            range.left.x=[0-photo.w,wrap.w/2-photo.w/2];
            range.left.y=[0-photo.h,wrap.h];
            range.right.x=[wrap.w/2+photo.w/2,wrap.w+photo.w];
            range.right.y=range.left.y;

            //小范围
            // range.left.x=[0,wrap.w/2-photo.w];
            // range.left.y=[0,wrap.h];
            // range.right.x=[wrap.w/2+photo.w,wrap.w];
            // range.right.y=range.left.y;
            return range;

        }
      /*排序海报*/
      function rsort(n) {
          var _photo=g('.photo');
          var photos=[];
          for(let s=0,t=_photo.length;s<t;s++)
          {
              _photo[s].classList.remove('photo_center');
              photos.push(_photo[s]);
          }
          var photo_center=g("#photo_"+n);
          photo_center.classList.add('photo_center');
          //去除在正中间的海报
          photo_center=photos.splice(n,1)[0];

          /*去掉居中的*/
          /*把海报分为左右两个部分*/


          var photos_left=photos.splice(0,Math.ceil(photos.length/2));
          var photos_right=photos;

          var ranges=range();
          for(var s in photos_left){
              var photo=photos_left[s];
              photo.style.left = random(ranges.left.x)+'px';
              photo.style.top = random(ranges.left.y)+'px';
              photo.style['transform']='rotate('+random([-150,150])+'deg) scale(1)';
          }
          for(var s in photos_right){
              var photo=photos_right[s];
              photo.style.left = random(ranges.right.x)+'px';
              photo.style.top = random(ranges.right.y)+'px';
              photo.style['transform']='rotate('+random([-150,150])+'deg) scale(1)';
          }
          //控制按钮处理
          var navs=g('.i');
          for(var s=0;s<navs.length;s++){
              navs[s].classList.remove('i_current');
              navs[s].classList.remove('i_back');
          }

          g('#nav_'+n).classList.add('i_current');

      }


    /*通用函数*/
    function g(selector) {
        var method=selector.substr(0,1)=='.'? 'getElementsByClassName':
            'getElementById';
        return document[method](selector.substr(1));
    }


    // const ad = document.querySelector(".photo_center");
    // ad.addEventListener('click', function () {
    //     turn(ad);
    // }, false);
