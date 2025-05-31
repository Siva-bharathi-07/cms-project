import React from "react";

export default function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>
        <form
          className="flex flex-col gap-4"
          onClick={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Enter your Name"
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select your Department</option>
            <option value="IT Operations">IT Operations</option>
            <option value="Infrastructure & Networking">
              Infrastructure & Networking
            </option>
            <option value="Software Development / Engineering">
              Software Development / Engineering
            </option>
            <option value="DevOps / Site Reliability Engineering (SRE)">
              DevOps / Site Reliability Engineering (SRE)
            </option>
            <option value="Technical Support / Helpdesk">
              Technical Support / Helpdesk
            </option>
            <option value="IT Security / Cybersecurity">
              IT Security / Cybersecurity
            </option>
            <option value="Database Administration (DBA)">
              Database Administration (DBA)
            </option>
            <option value="Cloud Engineering / Cloud Operations">
              Cloud Engineering / Cloud Operations
            </option>
            <option value="Enterprise Architecture">
              Enterprise Architecture
            </option>
            <option value="Quality Assurance (QA) / Testing">
              Quality Assurance (QA) / Testing
            </option>
            <option value="Data Science / Analytics">
              Data Science / Analytics
            </option>
            <option value="AI / Machine Learning Engineering">
              AI / Machine Learning Engineering
            </option>
            <option value="Business Intelligence (BI)">
              Business Intelligence (BI)
            </option>
            <option value="UX/UI Design">UX/UI Design</option>
            <option value="Product Management">Product Management</option>
            <option value="IT Project Management / PMO">
              IT Project Management / PMO
            </option>
            <option value="Information Systems / ERP Management">
              Information Systems / ERP Management
            </option>
            <option value="IT Governance / Compliance">
              IT Governance / Compliance
            </option>
            <option value="IT Procurement / Asset Management">
              IT Procurement / Asset Management
            </option>
            <option value="Research & Development (R&D)">
              Research & Development (R&D)
            </option>
          </select>
          <select
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select your Country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bahrain">Bahrain</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Barbados">Barbados</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Belize">Belize</option>
            <option value="Benin">Benin</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Bosnia and Herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="Botswana">Botswana</option>
            <option value="Brazil">Brazil</option>
            <option value="Brunei">Brunei</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Cambodia">Cambodia</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Canada">Canada</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Chile">Chile</option>
            <option value="China">China</option>
            <option value="Colombia">Colombia</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo (Congo-Brazzaville)">
              Congo (Congo-Brazzaville)
            </option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="Croatia">Croatia</option>
            <option value="Cuba">Cuba</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czechia (Czech Republic)">
              Czechia (Czech Republic)
            </option>
            <option value="Democratic Republic of the Congo">
              Democratic Republic of the Congo
            </option>
            <option value="Denmark">Denmark</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Dominica">Dominica</option>
            <option value="Dominican Republic">Dominican Republic</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Egypt">Egypt</option>
            <option value="El Salvador">El Salvador</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Estonia">Estonia</option>
            <option value="Eswatini (fmr. Swaziland)">
              Eswatini (fmr. Swaziland)
            </option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Fiji">Fiji</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Georgia">Georgia</option>
            <option value="Germany">Germany</option>
            <option value="Ghana">Ghana</option>
            <option value="Greece">Greece</option>
            <option value="Grenada">Grenada</option>
            <option value="Guatemala">Guatemala</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Guyana">Guyana</option>
            <option value="Haiti">Haiti</option>
            <option value="Honduras">Honduras</option>
            <option value="Hungary">Hungary</option>
            <option value="Iceland">Iceland</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Jamaica">Jamaica</option>
            <option value="Japan">Japan</option>
            <option value="Jordan">Jordan</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="Kenya">Kenya</option>
            <option value="Kiribati">Kiribati</option>
            <option value="Korea (North)">Korea (North)</option>
            <option value="Korea (South)">Korea (South)</option>
            <option value="Kuwait">Kuwait</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Laos">Laos</option>
            <option value="Latvia">Latvia</option>
            <option value="Lebanon">Lebanon</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Liechtenstein">Liechtenstein</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Maldives">Maldives</option>
            <option value="Mali">Mali</option>
            <option value="Malta">Malta</option>
            <option value="Marshall Islands">Marshall Islands</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Mexico">Mexico</option>
            <option value="Micronesia">Micronesia</option>
            <option value="Moldova">Moldova</option>
            <option value="Monaco">Monaco</option>
            <option value="Mongolia">Mongolia</option>
            <option value="Montenegro">Montenegro</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Myanmar (Burma)">Myanmar (Burma)</option>
            <option value="Namibia">Namibia</option>
            <option value="Nauru">Nauru</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nicaragua">Nicaragua</option>
            <option value="Niger">Niger</option>
            <option value="Nigeria">Nigeria</option>
            <option value="North Macedonia">North Macedonia</option>
            <option value="Norway">Norway</option>
            <option value="Oman">Oman</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Palau">Palau</option>
            <option value="Palestine State">Palestine State</option>
            <option value="Panama">Panama</option>
            <option value="Papua New Guinea">Papua New Guinea</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Philippines">Philippines</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Qatar">Qatar</option>
            <option value="Romania">Romania</option>
            <option value="Russia">Russia</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
            <option value="Saint Lucia">Saint Lucia</option>
            <option value="Saint Vincent and the Grenadines">
              Saint Vincent and the Grenadines
            </option>
            <option value="Samoa">Samoa</option>
            <option value="San Marino">San Marino</option>
            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Senegal">Senegal</option>
            <option value="Serbia">Serbia</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Singapore">Singapore</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Solomon Islands">Solomon Islands</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Sudan">South Sudan</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sudan">Sudan</option>
            <option value="Suriname">Suriname</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Syria">Syria</option>
            <option value="Tajikistan">Tajikistan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Thailand">Thailand</option>
            <option value="Timor-Leste">Timor-Leste</option>
            <option value="Togo">Togo</option>
            <option value="Tonga">Tonga</option>
            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Turkey">Turkey</option>
            <option value="Turkmenistan">Turkmenistan</option>
            <option value="Tuvalu">Tuvalu</option>
            <option value="Uganda">Uganda</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="Vanuatu">Vanuatu</option>
            <option value="Vatican City (Holy See)">
              Vatican City (Holy See)
            </option>
            <option value="Venezuela">Venezuela</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Yemen">Yemen</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
          <select
            required
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select your Hobby</option>
            <option value="Drawing">Drawing</option>
            <option value="Painting">Painting</option>
            <option value="Photography">Photography</option>
            <option value="Writing stories">Writing stories</option>
            <option value="Poetry">Poetry</option>
            <option value="DIY crafts">DIY crafts</option>
            <option value="Playing a musical instrument">
              Playing a musical instrument
            </option>
            <option value="Graphic design">Graphic design</option>
            <option value="Hiking">Hiking</option>
            <option value="Gardening">Gardening</option>
            <option value="Camping">Camping</option>
            <option value="Biking">Biking</option>
            <option value="Birdwatching">Birdwatching</option>
            <option value="Rock climbing">Rock climbing</option>
            <option value="Reading">Reading</option>
            <option value="Gaming">Gaming</option>
            <option value="Watching movies">Watching movies</option>
            <option value="Cooking">Cooking</option>
            <option value="Baking">Baking</option>
            <option value="Puzzles">Puzzles</option>
            <option value="Board games">Board games</option>
            <option value="Collecting">Collecting</option>
            <option value="Running">Running</option>
            <option value="Yoga">Yoga</option>
            <option value="Pilates">Pilates</option>
            <option value="Martial arts">Martial arts</option>
            <option value="Dance">Dance</option>
            <option value="Swimming">Swimming</option>
            <option value="Skateboarding">Skateboarding</option>
            <option value="Learning a new language">
              Learning a new language
            </option>
            <option value="Coding">Coding</option>
            <option value="Programming">Programming</option>
            <option value="Chess">Chess</option>
            <option value="Woodworking">Woodworking</option>
            <option value="Calligraphy">Calligraphy</option>
            <option value="Investing">Investing</option>
            <option value="Trading">Trading</option>
          </select>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
