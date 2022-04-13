import React from 'react'

export default function Home() {
  return (
    <>
     <div>
        <div>
          <div class="lightbox">
            <div class="row" style={{ backgroundColor: "black" }}>
              <div class="col-lg-6">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
                  alt="Table Full of Spices"
                  class="w-100 mb-5 mb-md-8 shadow-1-strong rounded"
                />
                <img
                  src="https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
                  alt="Coconut with Strawberries"
                  class="w-100 shadow-1-strong rounded"
                />
              </div>
              <div class="col-lg-6">
                <img
                  src="https://images.unsplash.com/photo-1561065270-5c2af775b542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2V0JTIwdG9nZXRoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
                  data-mdb-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
                  alt="Dark Roast Iced Coffee"
                  class="w-100 shadow-1-strong rounded"
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className=" bg-dark text-white">
              "It's such a happiness,
              <br />
              when good people get together."
            </h2>
          </div>
        </div>

        <div>
          <div class="row">
            <div class="col-md-3 bg-dark text-white">
              <ul>
                <u>
                  <b>Events</b>
                </u>
                <li>
                  <a href="#f1" target="_self">
                    Birthday
                  </a>
                </li>
                <li>
                  <a href="#f2">Get togethers</a>
                </li>
                <li>
                  <a href="#f3">Seminars</a>
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              {" "}
              <div>
                <dl>
                  <dt className="bg-dark text-white">Who we are?</dt>
                  <dd>
                    <br />
                  </dd>
                  <img
                    src="https://i.pinimg.com/564x/99/02/fd/9902fd456863977449ea8212a847402c.jpg"
                    width={400}
                  ></img>
                  <dd>
                    <br />
                    We are an enthusiastic group of Professionals with a
                    Corporate background.Every occasion is unique as are the
                    necessities of each client. Our concentrate appropriate from
                    the earliest starting point has been to comprehend in detail
                    the prerequisite of our regarded client. We are a one-stop
                    answer for your corporate occasion, an event marking and
                    advertising, event creation and AV coordination, logistics
                    and tasks administration or a social occasion. Our group is
                    dependably there to execute and to convey substantial
                    business results.
                  </dd>
                  <br />
                  <dt>
                    <p className="bg-dark text-white">
                      {" "}
                      <a name="f1"> Birthday</a>
                    </p>
                  </dt>
                  <dd>
                    <br />
                    <b>Description:</b>Evento is a professional birthday party
                    decorator in pune offering complete event planning services
                    for a birthday. Our team of professionals will analyse your
                    requirements and provide birthday ideas to suit your needs
                    and budget. Either your birthday party budget is small or
                    big, we handle all kinds of party works for all budgets. Let
                    us handle the birthday party and you just enjoy your
                    memorable moments, make your guests surprise by your best
                    birthday bash in the town. We have made many parents happy
                    with our birthday party decorations.
                  </dd>
                  <dd>Prize:50,000/-</dd>
                  <dd>Services:all</dd>
                </dl>
              </div>
              <br />
              <div>
                <dl>
                  <dt>
                    <p className="bg-dark text-white">
                      {" "}
                      <a name="f2"> Get togethers</a>
                    </p>
                  </dt>
                  <dd>
                    <br />
                    <b> Description:</b>We have dedicated team of event planners
                    for Get Together type of Events. Our professionals closely
                    interact with our clients and make a note of their various
                    requirements. Apart from this, we also employ best cooks who
                    prepare delicious food which not only makes you happy and
                    proud but also increases our honor in one’s eyes. We also
                    provide our clients with a full buffet at home with all
                    kinds of fixings even if the budget is small. Further, we
                    offer these services to our clients, at the most reasonable
                    prices.
                  </dd>
                  <dd>Prize:50,000/-</dd>
                  <dd>Services:all</dd>
                </dl>
              </div>
              <br />
              <div>
                <dl>
                  <dt>
                    <p className="bg-dark text-white">
                      {" "}
                      <a name="f3"> Seminars</a>
                    </p>
                  </dt>
                  <dd>
                    <br />
                    <b> Description:</b>We ensure the success of any conferences
                    or seminars by well-crafted event planning and implementing
                    & reviewing that’s our strength. Our ability to get into the
                    minutes of the details enables us to secure & handle every
                    aspect right from hospitality to the most advanced technical
                    requirements of any conference or seminar.
                  </dd>
                  <dd>Prize:50,000/-</dd>
                  <dd>Services:all</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
