const settingsHTML = `
<div class="setting">
    <label>Work</label>
    <div class="controls"><button onclick="document.getElementById('workMinuteInput').stepDown()" class="stepper">-</button><input type="number" id="workMinuteInput" min="1" max="60" class="step"/><button onclick="document.getElementById('workMinuteInput').stepUp()" class="stepper">+</button></div>
</div>
<div class="setting">
    <label>Break</label><div class="controls"><button onclick="document.getElementById('breakMinuteInput').stepDown()" class="stepper">-</button><input type="number" id="breakMinuteInput" min="1" max="60" class="step"/><button onclick="document.getElementById('breakMinuteInput').stepUp()" class="stepper">+</button></div>
</div>
<div class="setting">
    <label>Long Break</label><div class="controls"><button onclick="document.getElementById('lbMinuteInput').stepDown()" class="stepper">-</button><input type="number" id="lbMinuteInput" min="1" max="60" class="step"/><button onclick="document.getElementById('lbMinuteInput').stepUp()" class="stepper">+</button></div>
</div>
<button class="applySettings" id="applySettings">Apply</button>
`;

export default settingsHTML;
