import React, { useState } from 'react';
import { upcomingEvents } from '../../assets/data/upcomingEvents';
import { UpcomingEvent } from '../../types/upcomingEvent';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import './SignUpForm.scss';

interface InputField  {
  fieldName: string;
  type: string;
}

const inputFields: InputField[] = [
  {fieldName: "Imie", type: "text"},
  {fieldName: "Nazwisko", type: "text"},
  {fieldName: "Data urodzenia", type: "text"},
  {fieldName: "PESEL", type: "text"},
  {fieldName: "Kod pocztowy", type: "text"},
  {fieldName: "Miasto", type: "text"},
  {fieldName: "Telefon", type: "tel"},
  {fieldName: "Email", type: "email"},
  {fieldName: "Wzrost", type: "text"},
  {fieldName: "Waga", type: "text"},
  {fieldName: "Klub", type: "text"},
]

const consents = [
  "Wyrażam zgodę na używanie wizerunku dziecka w materiałach promocyjnych, na stronie internetowej oraz na plakatach Festiwalu Hokeja.",
  "Wyrażam zgodę na przetwarzanie moich danych osobowych przez Festiwal Hokeja, zgodnie z polityką prywatności strony www.festiwalhokeja.com, dla potrzeb niezbędnych do przeprowadzenia obozu sportowego. ",
  "Wyrażam zgodę na przekazywanie mi informacji handlowej środkami komunikacji elektronicznej przez Festiwal Hokeja ",
  "Wraz z zapisem zawodnika, akceptuję wszystkie postanowienia umów, które znajdują się poniżej",
];

const HIGHLIGHT__COLOR = '#E81800';

const SignUpForm = () => {
  const [chosenEvent, setChosenEvent] = useState<null | UpcomingEvent>(null);
  const [highlightPayment, setHighlightPayment] = useState(false);

  const handleEventChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTitle = event.target.value;
    const selectedEvent = upcomingEvents.find(
      (upcomingEvent) => upcomingEvent.title === selectedTitle
    );
    setChosenEvent(selectedEvent || null);
  };

  const handleTemporaryHighlight = () => {
    setHighlightPayment(true);
    setTimeout(() => setHighlightPayment(false), 1000);
  }
  
  return (
    <form className="sign-up-form">
      <h2 className="sign-up-form__title">Formularz zapisowy</h2>
      <div className="sign-up-form__wrapper">
      <select 
        className="sign-up-form__event-selection" 
        name="event" 
        id="event"
        defaultValue="none"
        onChange={handleEventChange}
      >
        <option value="none" className="sign-up-form__event-option">Wybierz wydarzenie</option>
        {upcomingEvents.map(upcomingEvent => (
          <option 
            className="sign-up-form__event-option" 
            value={upcomingEvent.title}
          >
            {upcomingEvent.title}
          </option>
        ))}
      </select>
      
      <div className="sign-up-form__payment-info">
        <h3 className="sign-up-form__payment-info-title">Płatność</h3>
         
        <div className="sign-up-form__payment-info-content" style={{borderColor: `${highlightPayment ? HIGHLIGHT__COLOR: 'transparent'}`}}>
        {chosenEvent ?
          <><h4 className="sign-up-form__payment-info-content-title">{`KOSZT OBOZU ${chosenEvent.title} to:`}</h4>
          <p className="sign-up-form__payment-info-content-price">
                {chosenEvent.campOptions ? chosenEvent.campOptions.map((campOption, index) => (
                  <>
                    {`${campOption.price} PLN - ${campOption.name} `}
                    {index < (chosenEvent.campOptions?.length || 1) - 1 && <br />}
                  </>
                )) : chosenEvent.price}
              </p><p className="sign-up-form__payment-info-content-summary">
                  Ostatecznym potwierdzeniem uczestnictwa w obozie hokejowym organizowanym przez Festiwal Hokeja jest wpłata zaliczki w kwocie 990 złotych. Zaliczkę należy wpłacić do 3 dni od dokonania zgłoszenia na numer konta podany poniżej.

                  Pozostałą część kwoty należy wpłacić do 3 dni roboczych przed rozpoczęciem danego obozu.
                  *Rezygnacja z uczestnictwa poniżej 30 dni od rozpoczęcia skutkuje utratą zaliczki.

                  RACHUNEK BANKOWY:
                  Nazwa Banku: Bank Pekao SA
                  Numer konta: 31 1240 1633 1111 0000 2630 5075
                  Kod BIC/Swift: PKOPPLPW
                  Tytuł przelewu: Festiwal Hokeja +Nazwa obozu +Imię i Nazwisko Uczestnika
                </p></> : <p className="sign-up-form__payment-info-content-unselected">
                  <strong>wybierz wydarzenie</strong>, w którym chcesz wziąć udział, aby poznać szczegóły płatności.
                </p>
        }
        </div>
        <div className="sign-up-form__inputs-wrapper">
          {inputFields.map((inputField) => {
            const {fieldName, type} = inputField;
            return (
            <div className="sign-up-form__input-wrapper">
              <label 
                htmlFor={fieldName} 
                className="sign-up-form__label"
              >
                {fieldName}
              </label>
              <input 
                type={type} 
                className="sign-up-form__input" 
                placeholder={fieldName}
                id={fieldName}
              />
            </div>
          )})}
          {chosenEvent?.groupTypes && 
          <div className="sign-up-form__additional-inputs">
            <h5 className="sign-up-form__additional-inputs-title">Grupa</h5>
            {chosenEvent.groupTypes.map(groupType => {
              const {name, bottomYear, topYear} = groupType;
              console.log(groupType)
              
              return (
                <div className="sign-up-form__additional-input-wrapper">
                  <input 
                    type="radio" 
                    className="sign-up-form__additional-input" 
                    id={name}
                    value={`${bottomYear}-${topYear}`}
                    name="group"
                  />
                  <label 
                    htmlFor={name} 
                    className="sign-up-form__additional-label sign-up-form__additional-label--visible"
                  >
                    {`${name} - (${bottomYear} - ${topYear})`}
                  </label>
                </div>
              )
            })}
          </div> 
          }
          {chosenEvent?.campOptions && 
          <div className="sign-up-form__additional-inputs">
            <h5 className="sign-up-form__additional-inputs-title">Opcja</h5>
            {chosenEvent.campOptions.map(campOption => {
              const {name, price} = campOption;
              return (
                <div className="sign-up-form__additional-input-wrapper">
                  <input 
                    type="radio" 
                    className="sign-up-form__additional-input" 
                    id={name}
                    value={price}
                    name="campOption"
                  />
                  <label htmlFor={name} className="sign-up-form__additional-label sign-up-form__additional-label--visible">{`${name} (${price} PLN)`}</label>
                </div>
              )
            })}

          </div> 
          }
          {chosenEvent?.campTypes && 
          <div className="sign-up-form__additional-inputs">
            <h5 className="sign-up-form__additional-inputs-title">Obóz</h5>
            {chosenEvent.campTypes.map(campType => {
              const {name, dateStart, dateEnd, place} = campType;
              return (
                <>
                  <div className="sign-up-form__additional-input-wrapper">
                    <input 
                      type="checkbox" 
                      className="sign-up-form__additional-input" 
                      id={name} value={name}
                    />
                    <label 
                      htmlFor={name} 
                      className="sign-up-form__additional-label sign-up-form__additional-label--visible"
                    >
                      {`${dateStart} - ${dateEnd} - ${name} (${place})`}
                    </label>
                  </div>
                  
                  <p className="sign-up-form__additional-info">
                    Proszę zaznaczyć, na który obóz/obozy, ma zostać zapisany uczestnik (Istnieje możliwość wyboru kilku obozów jednocześnie).
                  </p>
                </>
              )
            })}

          </div> 
          }
          <label htmlFor="additional-info" className="sign-up-form__label">additional info</label>
          <textarea 
            name="additional-info" 
            id="additional-info" 
            placeholder="informacje dodatkowe"
            className="sign-up-form__input sign-up-form__input--additional-info"
          ></textarea>
          <div className="sign-up-form__consents">
            {consents.map((consent, index) => {
              return (
              <div className="sign-up-form__consent">
                <input 
                  type="checkbox" 
                  className="sign-up-form__consent-input" 
                  id={`consent-${index+1}`}
                />
                <label htmlFor={`consent-${index+1}`} className="sign-up-form__consent-label">{consent}</label>
              </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="sign-up-form__deals">
        <button className="sign-up-form__deal">
          <a href="https://festiwalhokeja.com/wp-content/uploads/2023/09/Zalacznik-1-OGOLNE-WARUNKI-UMOWY-1.pdf">
            Ogólne Warunki Umowy
          </a>
        </button>
        <button className="sign-up-form__deal">
          <a href="https://festiwalhokeja.com/wp-content/uploads/2023/09/UMOWA-Z-RODZICAMI-1.pdf">
            Umowa z Rodzicami
          </a>
        </button>
      </div>
      <div className="sign-up-form__final-info">
        <p className="sign-up-form__final-info-price">
          Cena: <span className="sign-up-form__final-info-price-value"><strong>2230</strong></span> PLN
        </p>
        <p className="sign-up-form__final-info-payment" onClick={() => {
          window.scrollTo(0, 0);
          handleTemporaryHighlight();
        }}>
          warunki platnosci
        </p>
      </div>
      <FormSubmitButton />
      </div>
    
    </form>
  )
}

export default SignUpForm
