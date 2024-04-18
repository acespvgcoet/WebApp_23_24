import React from "react";
import "./css/team.css";

const Team = () => {
  const [eventData, setEventData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const past_events = await fetch("Events/past_event.json");
      const pastEventsData = await past_events.json();
      const current_events = await fetch("Events/past_event.json");
      const currentEventsData = await current_events.json();
      setEventData(pastEventsData);
      setEventData((eventData) => [...eventData, pastEventsData]);      
    };
    fetchData();
  }, []);
  //console.log(eventData);
  return (
    <div id="team">
      <h1 className="eventname">ACES COMMITTEE 2023</h1>
      {eventData.map((row, i) => (
        <div key={i} className="maindiv">
          <div className="teamName">{row[0].team}</div>
          <div key={i} className="subdiv">
            {row.map((obj, j) => {
              return (
                <div key={j} className="page">
                  {obj.name && (
                    <div class="card">
                      <div class="content">
                        <div class="imgBx">
                          <img src={obj.img} alt="" />
                        </div>
                        <div class="contentBx">
                          <h3>
                            {obj.name}
                            <br />
                            <span>{obj.position}</span>
                          </h3>
                        </div>
                      </div>
                      <ul class="sci">
                        <li style={{ "--i": 1 }}>
                          <a href="mailto: `{obj.mail}`">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                          </a>
                        </li>
                        {obj.instagram && (
                          <li style={{ "--i": 2 }}>
                            <a href={obj.instagram}>
                              <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                        )}
                        <li style={{ "--i": 3 }}>
                          <a href={obj.linkedin}>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
