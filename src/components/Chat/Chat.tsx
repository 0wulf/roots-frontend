import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Chat.module.css';
import { Vector5Icon } from './Vector5Icon.js';
import { Vector6Icon } from './Vector6Icon.js';
import { Vector12Icon } from './Vector12Icon.js';
import { Vector13Icon } from './Vector13Icon.js';
import { Vector14Icon } from './Vector14Icon.js';
import { Vector15Icon } from './Vector15Icon.js';
import { Vector16Icon } from './Vector16Icon.js';
import { Vector17Icon } from './Vector17Icon.js';
import { Vector18Icon } from './Vector18Icon.js';
import { Vector19Icon } from './Vector19Icon.js';
import { Vector018Icon } from './Vector018Icon.js';
import { Vector019Icon } from './Vector019Icon.js';


import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


interface Props {
  className?: string;
}

/* @figmaId 299:187 */
export const Chat: FC<Props> = memo(function Chat(props = {}) {
  const navigate = useNavigate();

  const [confirmado, setConfirmado] = useState(false);

  const handleConfirmar = () => {
    const fetchData = async (userId: number) => {
      try {
        const response = await fetch(
          'https://roots-api.onrender.com/declare',
          {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `userId=${userId}`,
          })
        const data = await response.json();
        console.log(data);
        setConfirmado(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(1);
  }

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <>
        <div className={classes.vector5}>
          <Vector5Icon className={classes.icon} />
        </div>
        <div className={classes.vector6}>
          <Vector6Icon className={classes.icon2} />
        </div>
        <div className={classes.imagen2}></div>
        <div className={classes.retiroRROOVitacura}>Retiro RROO Vitacura</div>
        <div className={classes.unnamed} onClick={() => navigate('/')}>&lt;</div>
        <div className={classes.rectangle12}></div>
        <div className={classes.rectangle14}></div>
        <div className={classes.vector12}>
          <Vector12Icon className={classes.icon3} />
        </div>
        <div className={classes.mananaPasamosPorTusResiduosRec}>
          Mañana pasamos por tus residuos! Recuerda dejar el tacho en un lugar visible.
        </div>
        <div className={classes.lunes29DeMayo}>Lunes 29 de mayo</div>
        <div className={classes.rectangle16}></div>
        <div className={classes.vector14}>
          <Vector14Icon className={classes.icon4} />
        </div>
        <div className={classes.rectangle17}></div>
        <div className={classes.vector15}>
          <Vector15Icon className={classes.icon5} />
        </div>
        <div className={classes.yaPasamosPorTuCallePorFavorInd}>
          Ya pasamos por tu calle! Por favor indica si nos llevamos tus residuos.
        </div>
        <div className={classes.rectangle18}></div>
        <div className={classes.vector16}>
          <Vector16Icon className={classes.icon6} />
        </div>
        <div className={classes.muchasGraciasPorTuRespuestaTuI}>
          Muchas gracias por tu respuesta! Tu impacto se actualizará.
        </div>
        <div className={classes.martes30DeMayo}>Martes 30 de mayo</div>
        <div className={classes.rectangle15}></div>
        <div className={classes.vector13}>
          <Vector13Icon className={classes.icon7} />
        </div>
        <div className={classes.mananaPasamosPorTusResiduosRec2}>
          Mañana pasamos por tus residuos! Recuerda dejar el tacho en un lugar visible.
        </div>
        <div className={classes.lunes5DeJunio}>Lunes 05 de junio</div>
        <div className={classes.si}>Sí</div>
        <div className={classes.rectangle19}></div>
        <div className={classes.vector17}>
          <Vector17Icon className={classes.icon8} />
        </div>

        <div className={classes.yaPasamosPorTuCallePorFavorInd2}>
          Ya pasamos por tu calle! Por favor indica si nos llevamos tus residuos.
        </div>
        <div className={classes.martes30DeMayo2}>Martes 30 de mayo</div>


      </>
      <>
        {confirmado ? (
          <>
            <div className={classes.rectangle021}></div>
            <div className={classes.vector019}>
              <Vector019Icon className={classes.icon019} />
            </div>
            <div className={classes.muchasGraciasPorTuRespuestaTuI3}>
              Muchas gracias por tu respuesta! Tu impacto se actualizará.
            </div>
            <div className={classes.rectangle020}></div>
            <div className={classes.vector018}>
              <Vector018Icon className={classes.icon018} />
            </div>
            <div className={classes.si3}>Sí</div>
          </>
        ) : (
          <>
            <div onClick={handleConfirmar}>
              <div className={classes.rectangle20} ></div>
              <div className={classes.vector18}>
                <Vector18Icon className={classes.icon9} />
              </div>
              <div className={classes.si2}>Sí</div>
            </div>
            <div className={classes.rectangle21}></div>
            <div className={classes.vector19}>
              <Vector19Icon className={classes.icon10} />
            </div>
            <div className={classes.no}>No</div>
          </>
        )}

      </>

    </div>
  );
});
