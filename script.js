function updateLength(val) {
  document.getElementById("pwLengthValue").innerText = val;
}

function generateSalt(length = 20) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
  let salt = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charset.length);
    salt += charset[randIndex];
  }
  document.getElementById("salt").value = salt;
}

function generatePassword() {
  const length = parseInt(document.getElementById("pwLengthRange").value, 10);

  const useLower = document.getElementById("useLower").checked;
  const useUpper = document.getElementById("useUpper").checked;
  const useNumbers = document.getElementById("useNumbers").checked;
  const useSymbols = document.getElementById("useSymbols").checked;
  const autoSalt = document.getElementById("autoSalt").checked;

  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+";

  let charset = "";
  if (useLower) charset += lower;
  if (useUpper) charset += upper;
  if (useNumbers) charset += numbers;
  if (useSymbols) charset += symbols;

  if (charset === "") {
    alert("Bitte mindestens eine Zeichengruppe aktivieren.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * charset.length);
    password += charset[randIndex];
  }

  document.getElementById("generatedPassword").value = password;

  if (autoSalt) {
    generateSalt();
  }
}

function generateHash() {
  const algorithm = document.getElementById("algo").value;
  const input = document.getElementById("inputText").value;
  const salt = document.getElementById("salt").value;
  const data = input + salt;

  if (!data) {
    alert("Bitte Text eingeben.");
    return;
  }

  if (algorithm === "MD5") {
    const hash = SparkMD5.hash(data);
    document.getElementById("output").value = hash;
  } else {
    crypto.subtle.digest(algorithm, new TextEncoder().encode(data))
      .then(buffer => {
        const hashArray = Array.from(new Uint8Array(buffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        document.getElementById("output").value = hashHex;
      })
      .catch(() => alert("Fehler bei der Hash-Berechnung."));
  }
}

function copyToClipboard(elementId) {
  const element = document.getElementById(elementId);
  element.select();
  element.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(element.value)
    .then(() => alert("In Zwischenablage kopiert!"))
    .catch(() => alert("Kopieren fehlgeschlagen."));
}

function showComingSoon() {
  const modal = document.getElementById("customModal");
  modal.classList.remove("hidden");
  document.addEventListener("keydown", handleEnterClose);
}

function closeModal() {
  const modal = document.getElementById("customModal");
  modal.classList.add("hidden");
  document.removeEventListener("keydown", handleEnterClose);
}

function handleEnterClose(e) {
  if (e.key === "Enter") {
    closeModal();
  }
}
