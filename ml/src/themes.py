"""Keyword patterns used ONLY to find candidate reviews worth labelling.

They are deliberately rough. A keyword hit is not a label: you still read the
review and decide using the guide in docs/DATA_PLAN.md. The model you train
later must beat these patterns, so they also double as a crude baseline.
"""
import re

THEME_PATTERNS = {
    "harassment": r"harass|creep|stalk|groped|unwanted|inappropriate|made me uncomfortable|"
    r"catcall|leer|followed me|kept (asking|messaging|texting)|propos(ed|ition)",
    "transport_safety": r"(taxi|driver|cab|shuttle|transfer|uber).{0,80}"
    r"(unsafe|reckless|danger|scary|scared|afraid|speeding|rude|aggressive)|"
    r"(unsafe|reckless|dangerous) (taxi|driver|driving|ride)",
    "accommodation_security": r"(door|room) (did ?n.t|would ?n.t|not) lock|broken lock|"
    r"break.?in|burgl|stolen|theft|robbed|intruder|poorly lit|badly lit|"
    r"no security|unsafe (hotel|room|building|property)|isolated",
    "night_safety": r"(at night|after dark|late at night|nighttime).{0,80}"
    r"(unsafe|danger|scary|sketchy|dodgy|alone)|"
    r"(unsafe|sketchy|dodgy|dangerous) (area|neighbou?rhood|street|part of town)",
    "felt_safe": r"(felt|feel|feeling|was|very|extremely) (very |so |completely |totally |perfectly )?"
    r"(safe|secure)|safe (area|neighbou?rhood|location|place)|"
    r"solo (female|woman|women|traveller|traveler)",
    "staff_conduct": r"(staff|receptionist|host|guide|manager|owner).{0,60}"
    r"(rude|disrespect|dismissive|unprofessional|aggressive|hostile)|"
    r"(rude|unprofessional|disrespectful) (staff|reception|host|manager|owner)",
}

THEMES = list(THEME_PATTERNS)
COMPILED = {k: re.compile(v, re.IGNORECASE) for k, v in THEME_PATTERNS.items()}


def find_themes(text: str) -> list[str]:
    """Return every theme whose keyword pattern matches `text`."""
    return [theme for theme, rx in COMPILED.items() if rx.search(text)]
