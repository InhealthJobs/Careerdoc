export const CardExtension = {
    name: 'Card',
    type: 'response',
    match: ({ trace }) =>
      trace.type === 'ext_card' || trace.payload.name === 'ext_card',
    render: ({ trace, element }) => {
      const formContainer = document.createElement('div')
  
      formContainer.innerHTML = `
        <style>
        .imagen-container {
            position: relative;
            width: 200px;
            height: 200px;
          }
          
          .imagen-container img {
            width: 100%;
            height: 100%;
          }
          
          .imagen-hover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
          }
          
          .imagen-container:hover .imagen-hover {
            opacity: 1;
          }
          
          .imagen-hover h1 {
            color: #ffffff;
            font-size: 24px;
            margin-top: 20px;
            text-align: center;
          }
          
          .imagen-hover p {
            color: #ffffff;
            font-size: 16px;
            margin-top: 10px;
            text-align: center;
          }        
        </style>
        <div class="imagen-container">
            <img src="https://image.nuevayork.es/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg" alt="Imagen con efecto hover" alt="Imagen con efecto hover">
            <div class="imagen-hover">
                <h1>Arkansas</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vitae error explicabo dolorum recusandae alias, placeat incidunt vel, aut ipsum id, cupiditate asperiores fuga! Provident!</p>
            </div>
        </div> 
          ` 
      element.appendChild(formContainer)
    },
  }
