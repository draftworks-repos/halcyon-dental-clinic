import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateAppointmentForm,
  formatPhoneNumber,
  estimateTreatmentDuration,
} from './appointmentValidation.ts';

test('validates incomplete appointment submission', () => {
  const result = validateAppointmentForm({
    fullName: '',
    phone: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
});

test('validates valid phone and name', () => {
  const result = validateAppointmentForm({
    fullName: 'Clara Oswald',
    phone: '4155550199',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('formats 10-digit US telephone cleanly', () => {
  const formatted = formatPhoneNumber('4155550142');
  assert.equal(formatted, '(415) 555-0142');
});

test('returns treatment duration estimates accurately', () => {
  const invisalign = estimateTreatmentDuration('invisalign');
  assert.equal(invisalign.duration, '45 mins');
  assert.equal(invisalign.consultationIncluded, true);

  const cleaning = estimateTreatmentDuration('preventive');
  assert.equal(cleaning.duration, '40 mins');
});
