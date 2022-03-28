import logo from "../../assets/imgs/logo.png";
import "./Cars.css";
import exit from "../../assets/icons/exit.png";

function cars() {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt='logo'></img>
        <p className='title-logo'>AutoLuby</p>
      </div>

      <div>
        <h1 className="title">Seus Veículos</h1>
        <button className="btn-logout">Sair<img src={exit} alt='exit'></img></button>
      </div>

      <div>
        <p className="title2">Listagem de veículos reservados e vendidos</p>
        <ul class="pagination">
          <li >
            <a href="#" target="_self">
              Anterior
            </a>
          </li>
          <li>
            <a href="#">1</a>
          </li>

          <li>
            <a class="active">2</a>
          </li>

          <li>
            <a href="#">3</a>
          </li>

          <li>
            <a href="#" target="_self">
              Proximo
            </a>
          </li>
        </ul>
        <input type="search" className="search">
         
        </input>
      </div>

      <div className="central">
        <div className="cars">   
          <table>
            <thead >
              <tr >
                <th>Marca</th>
                <th>Modelo</th>
                <th>Ano</th>
                <th>Km</th>
                <th>Cor</th>
                <th>Status</th>
                <th>Chassi</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>Ford</td>
                <td>Fiesta</td>
                <td>2017</td>
                <td>70.000</td>
                <td>Branco</td>
                <td className="sold"><span>Vendido</span></td>
                <td>9BW</td>
                <td>R$ 39.000,00</td>
              </tr>
              <tr>
                <td>Ford</td>
                <td>Fiesta</td>
                <td>2017</td>
                <td>70.000</td>
                <td>Branco</td>
                <td className="reserved"><span>Reservado</span></td>
                <td>9BW</td>
                <td>R$ 39.000,00</td>
              </tr>
              <tr>
                <td>Ford</td>
                <td>Fiesta</td>
                <td>2017</td>
                <td>70.000</td>
                <td>Branco</td>
                <td className="reserved"><span>Reservado</span></td>
                <td>9BW</td>
                <td>R$ 39.000,00</td>
              </tr>  
              <tr>
                <td>Ford</td>
                <td>Fiesta</td>
                <td>2017</td>
                <td>70.000</td>
                <td>Branco</td>
                <td className="sold"><span>Vendido</span></td>
                <td>9BW</td>
                <td>R$ 39.000,00</td>
              </tr>
              <tr>
                <td>Ford</td>
                <td>Fiesta</td>
                <td>2017</td>
                <td>70.000</td>
                <td>Branco</td>
                <td className="sold"><span>Vendido</span></td>
                <td>9BW</td>
                <td>R$ 39.000,00</td>
              </tr>
              <tr>
                <td>Ford</td>
                <td>Fiesta</td>
                <td>2017</td>
                <td>70.000</td>
                <td>Branco</td>
                <td className="reserved"><span>Reservado</span></td>
                <td>9BW</td>
                <td>R$ 39.000,00</td>
              </tr>
              <tr>
                <td>Ford</td>
                <td>Fiesta</td>
                <td>2017</td>
                <td>70.000</td>
                <td>Branco</td>
                <td className="reserved"><span>Reservado</span></td>
                <td>9BW</td>
                <td>R$ 39.000,00</td>
              </tr> 
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
   
  );
   }
export default cars;