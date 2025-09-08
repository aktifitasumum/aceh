 const tonST1 = document.getElementById("tonST1");
      const FFAST1 = document.getElementById("FFAST1");
      const tonST2 = document.getElementById("tonST2");
      const FFAST2 = document.getElementById("FFAST2");

      const tonOT1 = document.getElementById("tonOT1");
      const FFAOT1 = document.getElementById("FFAOT1");
      const tonOT2 = document.getElementById("tonOT2");
      const FFAOT2 = document.getElementById("FFAOT2");

      const tonRec = document.getElementById("tonRec");
      const FFARec = document.getElementById("FFARec");
      const tonOER = document.getElementById("tonOER");
      const FFAOER = document.getElementById("FFAOER");

      const output = document.getElementById("output"); //Output

      const ids = [
        tonST1,
        FFAST1,
        tonST2,
        FFAST2,
        tonOT1,
        FFAOT1,
        tonOT2,
        FFAOT2,
        tonRec,
        FFARec,
        tonOER,
        FFAOER,
      ];
      ids.forEach((id) => {
        id.addEventListener("input", () => {
          const ST1 = Number(tonST1.value) * Number(FFAST1.value);
          const ST2 = Number(tonST2.value) * Number(FFAST2.value);
          const OT1 = Number(tonOT1.value) * Number(FFAOT1.value);
          const OT2 = Number(tonOT2.value) * Number(FFAOT2.value);
          const Rec = Number(tonRec.value) * Number(FFARec.value);
          const OER = Number(tonOER.value) * Number(FFAOER.value);
          const totalTonase = Number(tonST1.value) + Number(tonST2.value) + Number(tonOT1.value) + Number(tonOT2.value) + Number(tonRec.value) + Number(tonOER.value);
          const tonFFA = ST1 + ST2 + OT1 + OT2 + Rec + OER;
          const FFA = tonFFA / totalTonase;
          output.textContent = Math.round(FFA*100)/100;
        });
      });