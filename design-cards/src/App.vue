<template>
  <div class='card-list' >
    <div v-for="pattern in patterns">
      <div class='card col-8 offset-2'>
        <h3 class='card-title'> {{pattern.title}} Pattern</h3>
        <div class='card-content'>    
          <p> {{pattern.content}}</p>
        </div>
        <div class='card-content'>    
          <p> {{pattern.useCase}}</p>
        </div>
        <div class='card-content'>
          <a :href="pattern.source">Example</a>
        </div>  
      </div>
  
    </div>
  </div>

</template>

<script>


export default {
  data: function () {
    return {
      patterns: [ 
        { title: 'Abstract Factory',
          content: 'Groups object factories that have a common theme',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
        { title: 'Factory Method',
          content: 'Creates objects without specifying exact class',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
        { title: 'Builder',
          content: 'Groups object factories that have a common theme',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
        { title: 'Prototype',
          content: 'Clones existing objects in order to create new objects',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
        { title: 'Dependency Injection',
          content: 'A class accepts objects it requires from an injector instead of doing it directly',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Lazy Initialization',
          content: 'Delays creation of a resource consuming object until a more appropriate time',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Multition',
          content: 'Ensure a class only has named instances and provide a GPOA',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Object Pool',
          content: 'Recycles resources no longer in use in order to optimize resources',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Singleton',
          content: 'Ensure a class only has one instance and provide GPOA',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Resource acquisition is initialization (RIIA)',
          content: 'Ensure that resourcesare properly released by tying them to the lifespan of related object',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
         { title: 'Abstract Factory',
          content: 'Groups object factories that have a common theme',
          useCase: 'When this happens...',
          example: 'For Example...',
          source: 'http://spicymonkeymedia.com'
        },
        
      ]
    }
    
  }
  
  
}
</script>

<style>
.card-list {
  background: pink;
  padding-top: .75em;
}
.card {
  margin: .75em auto;
  
}
.card-content{
  border-bottom: 1px solid gray;
}

</style>
