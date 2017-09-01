<template>
  <div class='card' >
    <div v-for="pattern in patterns">
      <h3 class='card-title'> {{pattern.title}}</h3>
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
        }
      ]
    }
    
  }
  
  
}
</script>

<style>

</style>
