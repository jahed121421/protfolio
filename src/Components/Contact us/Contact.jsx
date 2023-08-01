const Contact = () => {
  return (
    <>
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32">
          <div className="flex justify-center">
            <div className="text-center lg:max-w-3xl md:max-w-xl">
              <h2 className="text-4xl mb-20 font-bold text-center">
                Contact Us
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group form-check text-center mb-6">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                    id="chack"
                  />
                  <label
                    className="form-check-label inline-block"
                    htmlFor="chack"
                  >
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type="submit"
                  className="
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-1/2 h-full">
              <img
                className="flex flex-wrap"
                src="https://img.freepik.com/free-photo/portrait-happy-smiling-cheerful-support-phone-operator-headset-isolated-white-wall_231208-9603.jpg?w=740&t=st=1688115473~exp=1688116073~hmac=5fdcb5392f53ef05af9a641cde300111d422d19bfeb8ad801a889cf301e5e679"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
