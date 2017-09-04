<template>
  
  <div class='card-list' >
    <h1>Design Pattern Flash Cards</h1>
    <div v-for="pattern in patterns">
      <div class='card col-8 offset-2' v-if="counter === i">
        
        <h3 class='card-title'> {{pattern.title}} Pattern</h3>
        <div class='card-content' v-if='showDescription'>    
          <p> {{pattern.description}}</p>
        </div>
        
        <div class='card-content' v-if='showUseCase'>    
          <p> {{pattern.useCase}}</p>
        </div>
        
        <div class='card-content example' v-if='showExample'>
          <a :href="pattern.source">Example</a>
        </div> 
        
        <div class='btn-group'>
          <button class='btn desc-btn' type='button' v-if='!showDescription' @click='revealDescription'>Description</button>
          <button class='btn use-case-btn' type='button' v-if='!showUseCase' @click='revealUseCase'>Use Case</button>
          <button class='btn example-btn' type='button' v-if='!showExample' @click='revealExample'>Example</button>
        </div>
      </div>
  
    </div>
    <div class='btn-group col-2 offset-5'>
      <button type='button' class='btn btn-down' @click='counterDown'><</button>
      <button type='button' class='btn btn-up' @click='counterUp'>></button>
    </div>
  </div>

</template>

<script>


export default {
  data: function () {
    return {
    counter: 0,
    showDescription: true,
    showUseCase: false,
    showExample: false,
      patterns: [ 
        { title: 'Abstract Factory',
          description: 'Groups object factories that have a common theme',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com',
          removeFromSet: false
        },
        { title: 'Factory Method',
          description: 'Creates objects without specifying exact class',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
        { title: 'Builder',
          description: 'Groups object factories that have a common theme',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
        { title: 'Prototype',
          description: 'Clones existing objects in order to create new objects',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
        { title: 'Dependency Injection',
          description: 'A class accepts objects it requires from an injector instead of doing it directly',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Lazy Initialization',
          description: 'Delays creation of a resource consuming object until a more appropriate time',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Multition',
          description: 'Ensure a class only has named instances and provide a GPOA',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Object Pool',
          description: 'Recycles resources no longer in use in order to optimize resources',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Singleton',
          description: 'Ensure a class only has one instance and provide GPOA',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'

        },
         { title: 'Resource acquisition is initialization (RIIA)',
          description: 'Ensure that resourcesare properly released by tying them to the lifespan of related object',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com',

        },
         { title: 'Abstract Factory',
          description: 'Groups object factories that have a common theme',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com',

        },
        
      ]
    }
  },
  methods: {
    counterDown: function () {
      if (this.counter !== 0) {
        this.counter--;
      } else {
        this.counter = this.patterns.length - 1;
      }
      this.revealDescription();
    },
    counterUp: function () {
      if (this.counter !== this.patterns.length-1) {
        this.counter++;
      } else {
        this.counter = 0;
      }
      this.revealDescription();
    },
    revealDescription:  function() {
      this.showDescription = true;
      this.showUseCase = false;
      this.showExample=false;
    },
    revealUseCase: function() {
      this.showDescription = false;
      this.showUseCase = true;
      this.showExample=false;
    },
    revealExample: function() {
      this.showDescription = false;
      this.showUseCase = false;
      this.showExample= true;
    }
    
  }
  

};
</script>

<style>
html {
  background: lightblue;
}
.card-list {
  background: lightblue;
  padding-top: .75em;
}
.card {
  margin: .75em auto;
  
}
.card-content{

}
.btn {
  color: white;
}
.desc-btn {
  background: purple;
}
.use-case-btn {
  background: violet;
}
.example-btn {
  background: rebeccapurple;
}
.btn-group, .example, h1 {
  text-align:center;
  
}
.btn-down{
  background:purple;
}

.btn-up{
    background:rebeccapurple;
}

</style>
