
export function OSForm(){
   const nome = 'Ezio A. Freire'
   const id = '0005'
   const numOS = 'OS4947013062022'
   const avatar = "C:/Users/PC-Home/ProjetosReact/the-prophet/src/pages/images/cliente1.jpg/30"
   
   return(
      
   <div className='frmOsForm'>
      <h1>The Prophet</h1>
      <a href="Editar OS"></a>
    
     
   
      <p>núm da OS {numOS}</p>
      <p>ID: {id}</p>
      <img src={avatar} alt="Imagem Avatar" />
      <p>cliente:  {nome}</p> 
      <div>
         
         <p>Status:</p>
         <p><input type="text" placeholder="4 - Finalizada" /></p>
         <p>Classe:</p>
         <p><input type="text" placeholder="1 - Seg. Eletrôica" /></p>
         <p>Marca:</p>
         <p><input type="text" placeholder="Rossi" /></p>
         <p>Modelo</p>
         <p><input type="text" placeholder="DZ3 Turbo" /></p>
         <p>Defeito Apresentado:</p>
         <p><input type="text" placeholder="Parece girar mas não traciona o portão" /></p>
         <p>Componente substituído</p>
         <p><input type="text" placeholder="Engrenagen 2232 22 dentes" /></p>
         <p>Dados do portão:</p>
     <div className='dadosDoProtao'>
         <p>Comprimento:</p>
         <p><input type="text" placeholder="3,5" /><p>m</p></p>
         <p>Altura:</p>
         <p><input type="text" placeholder="2,2" /></p><p>m</p>
         <p>Peso:</p>
         <p><input type="text" placeholder="125" /></p><p>Kg</p>
      </div>
         <p>Estimativa ciclos diário:</p>
         <p><input type="text" placeholder="10" /></p>
         <p>Observações:</p>
         <p><input type="text area" placeholder="Blá blá blá" /></p>
         <p>Laudo técnico:</p>
         <p><input type="text" placeholder="Observado que: " /></p>
         <p><input type="button button1" value="Salvar OS"/></p>
   </div>

   </div>
   )
    
 }


/*function OSForm() {
    // return <h1>The-prophet</h1>
    return (
       <div>Gerar OS</div>
   
    );
   }
   
   export default OSForm*/