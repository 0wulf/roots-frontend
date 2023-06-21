import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _304467Ffffff1Icon } from './_304467Ffffff1Icon.js';
import { _1873373Ffffff1Icon } from './_1873373Ffffff1Icon.js';
import { _12179131Icon } from './_12179131Icon.js';
import { _12998051Icon } from './_12998051Icon.js';
import classes from './Home.module.css';
import { Vector1Icon } from './Vector1Icon.js';
import { Vector5Icon } from './Vector5Icon.js';
import { Vector6Icon } from './Vector6Icon.js';
import { Vector33Icon2 } from './Vector33Icon2.js';
import { Vector33Icon3 } from './Vector33Icon3.js';
import { Vector33Icon4 } from './Vector33Icon4.js';
import { Vector33Icon } from './Vector33Icon.js';
import { Vector34Icon } from './Vector34Icon.js';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Props {
  className?: string;
}
/* @figmaId 244:123 */
export const Home: FC<Props> = memo(function Home(props = {}) {
  const navigate = useNavigate();

  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);

  useEffect(() => {
    const fetchData = async (unitId: string) => {
      switch (unitId) {
        case '1':
          try {
            const response = await fetch(`https://roots-api.onrender.com/show/1/${unitId}`);
            const data1 = await response.json();
            setData1(data1);
            console.log(data1);
          } catch (error) {
            console.log(error);
          }
          break;
        case '2':
          try {
            const response = await fetch(`https://roots-api.onrender.com/show/1/${unitId}`);
            const data2 = await response.json();
            setData2(data2);
            console.log(data2);
          } catch (error) {
            console.log(error);
          }
          break;
        case '3':
          try {
            const response = await fetch(`https://roots-api.onrender.com/show/1/${unitId}`);
            const data3 = await response.json();
            setData3(data3);
            console.log(data3);
          } catch (error) {
            console.log(error);
          }
          break;
        case '4':
          try {
            const response = await fetch(`https://roots-api.onrender.com/show/1/${unitId}`);
            const data4 = await response.json();
            setData4(data4);
            console.log(data4);
          } catch (error) {
            console.log(error);
          }
          break;
        case '5':
          try {
            const response = await fetch(`https://roots-api.onrender.com/show/1/${unitId}`);
            const data5 = await response.json();
            setData5(data5);
            console.log(data5);
          } catch (error) {
            console.log(error);
          }
          break;
        default:
          break;
      }
    };
    fetchData('1');
    fetchData('2');
    fetchData('3');
    fetchData('4');
    fetchData('5');
  }, []);


  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <>
        <div className={classes.vector5}>
          <Vector5Icon className={classes.icon} />
        </div>
        <div className={classes.vector6}>
          <Vector6Icon className={classes.icon2} />
        </div>
        <div className={classes.gabrielZuniga}>Gabriel Zúñiga</div>
        <div className={classes.bienvenido}>Bienvenido.</div>
        <div className={classes.unnamed}>☰</div>
        <div className={classes.rectangle12}></div>
        <div className={classes.vector1}>
          <Vector1Icon className={classes.icon3} />
        </div>
        <div className={classes._12179131}>
          <_12179131Icon className={classes.icon4} />
        </div>
        <div className={classes._12998051}>
          <_12998051Icon className={classes.icon5} />
        </div>
        <div className={classes.inicio}>Inicio</div>
        <div className={classes.mapa}>Mapa</div>
        <div className={classes.conecta}>Conecta</div>
        <div className={classes.aprende}>Aprende</div>
        <div className={classes.cuenta}>Cuenta</div>
        <div className={classes.recomendado}>Recomendado</div>
        <div className={classes.frame2}>
          <div className={classes.rectangle14}></div>
          <div className={classes.vector33}>
            <Vector33Icon className={classes.icon6} />
          </div>
          <div className={classes.imagen2}></div>
          <div className={classes.BienvenidoAROOTS}>¡Bienvenido a ROOTS!</div>
          <div className={classes.aprendeAUsarLaAppAca}>Aprende a usar la app acá.</div>
        </div>
        <div className={classes.frame4}>
          <div className={classes.rectangle142}></div>
          <div className={classes.vector332}>
            <Vector33Icon2 className={classes.icon7} />
          </div>
          <div className={classes.imagen22}></div>
          <div className={classes.retiroDeRROO}>Retiro de RROO</div>
          <div className={classes.inscribeteAcaConTuMunicipalida}>
            Inscríbete acá con tu municipalidad o con una pyme.
          </div>
        </div>
        <div className={classes.frame5}>
          <div className={classes.rectangle143}></div>
          <div className={classes.vector333}>
            <Vector33Icon3 className={classes.icon8} />
          </div>
          <div className={classes.imagen23}></div>
          <div className={classes.BienvenidoAROOTS2}>¡Bienvenido a ROOTS!</div>
          <div className={classes.aprendeAUsarLaAppAca2}>Aprende a usar la app acá.</div>
        </div>
        <div className={classes.frame6}>
          <div className={classes.rectangle144}></div>
          <div className={classes.vector334}>
            <Vector33Icon4 className={classes.icon9} />
          </div>
          <div className={classes.imagen24}></div>
          <div className={classes.retiroDeRROO2}>Retiro de RROO</div>
          <div className={classes.inscribeteAcaConTuMunicipalida2}>
            Inscríbete acá con tu municipalidad o con una pyme.
          </div>
        </div>
      </>
      <div className={classes.frame3} onClick={() => { navigate('/chat') }}>
        <div className={classes.rectangle15}></div>
        <div className={classes.vector34}>
          <Vector34Icon className={classes.icon10} />
        </div>
        <div className={classes.imagen3}></div>
        <div className={classes.actualizaTuImpacto}>Actualiza tu impacto</div>
        <div className={classes.yRevisaEnDetalleTuAporteAlPlan}>Y revisa en detalle tu aporte al planeta.</div>
      </div>
      <>
        <div className={classes._1873373Ffffff1}>
          <_1873373Ffffff1Icon className={classes.icon11} />
        </div>
        <div className={classes._304467Ffffff1}>
          <_304467Ffffff1Icon className={classes.icon12} />
        </div>
      </>
      <div className={classes.frame1}>
        <div className={classes.imagen4}></div>
        <div className={classes.hasDisminuidoTuHuellaDeCarbono}>
          <div className={classes.textBlock}>Has disminuido tu huella de carbono en </div>
          <div className={classes.textBlock2}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>
                {data5 ? (<>{data5['result']}</>) : (<>Cargando...</>)}
              </span>
            </p>
          </div>
          <div className={classes.textBlock3}>
            <p className={classes.labelWrapper2}></p>
          </div>
          <div className={classes.textBlock4}>kilogramos de CO2</div>
        </div>
        <div className={classes.imagen5}></div>
        <div className={classes.hasAyudadoEnLaProduccionDe20Ki}>
          <div className={classes.textBlock5}>Has ayudado en la producción de</div>
          <div className={classes.textBlock6}>
            <p className={classes.labelWrapper3}>
              <span className={classes.label2}>
                {data2 ? (<>{data2['result']}</>) : (<>Cargando...</>)}
              </span>
            </p>
          </div>
          <div className={classes.textBlock7}>
            <p className={classes.labelWrapper4}></p>
          </div>
          <div className={classes.textBlock8}>kilogramos de compost</div>
        </div>
        <div className={classes.imagen1}></div>
        <div className={classes.potencialmenteTuCompostPuedeAh}>
          <div className={classes.textBlock9}>Potencialmente tu compost puede ahorrar</div>
          <div className={classes.textBlock10}>
            <p className={classes.labelWrapper5}>
              <span className={classes.label3}>
                {data4 ? (<>{data4['result']}</>) : (<>Cargando...</>)}
              </span>
            </p>
          </div>
          <div className={classes.textBlock11}>
            <p className={classes.labelWrapper6}></p>
          </div>
          <div className={classes.textBlock12}>bidones de agua</div>
        </div>
        <div className={classes.imagen25}></div>
        <div className={classes.hasEntregado103KgDeResiduosOrg}>
          <div className={classes.textBlock13}>Has entregado</div>
          <div className={classes.textBlock14}>
            <p className={classes.labelWrapper7}>
              <span className={classes.label4}>
                {data1 ? (<>{data1['result']}</>) : (<>Cargando...</>)}
              </span>
            </p>
          </div>
          <div className={classes.textBlock15}>
            <p className={classes.labelWrapper8}></p>
          </div>
          <div className={classes.textBlock16}>kg de residuos orgánicos</div>
        </div>
      </div>
    </div>
  );
});
